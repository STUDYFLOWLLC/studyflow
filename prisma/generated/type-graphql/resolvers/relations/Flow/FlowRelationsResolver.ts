import * as TypeGraphQL from "type-graphql";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { Flow } from "../../../models/Flow";
import { FlowFK_FlashCardStacksArgs } from "./args/FlowFK_FlashCardStacksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flow)
export class FlowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FlashCardStack], {
    nullable: false
  })
  async FK_FlashCardStacks(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlowFK_FlashCardStacksArgs): Promise<FlashCardStack[]> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).FK_FlashCardStacks(args);
  }

  @TypeGraphQL.FieldResolver(_type => CourseOnTerm, {
    nullable: true
  })
  async CourseOnTerm(@TypeGraphQL.Root() flow: Flow, @TypeGraphQL.Ctx() ctx: any): Promise<CourseOnTerm | null> {
    return getPrismaFromContext(ctx).flow.findUnique({
      where: {
        FlowID: flow.FlowID,
      },
    }).CourseOnTerm({});
  }
}
