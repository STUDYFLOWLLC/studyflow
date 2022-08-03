import * as TypeGraphQL from "type-graphql";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { Flow } from "../../../models/Flow";
import { Repetition } from "../../../models/Repetition";
import { Task } from "../../../models/Task";
import { RepetitionFK_TasksArgs } from "./args/RepetitionFK_TasksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Repetition)
export class RepetitionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() repetition: Repetition, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).repetition.findUnique({
      where: {
        RepetitionID: repetition.RepetitionID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => FlashcardStack, {
    nullable: true
  })
  async FK_FlashcardStack(@TypeGraphQL.Root() repetition: Repetition, @TypeGraphQL.Ctx() ctx: any): Promise<FlashcardStack | null> {
    return getPrismaFromContext(ctx).repetition.findUnique({
      where: {
        RepetitionID: repetition.RepetitionID,
      },
    }).FK_FlashcardStack({});
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async FK_Tasks(@TypeGraphQL.Root() repetition: Repetition, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RepetitionFK_TasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).repetition.findUnique({
      where: {
        RepetitionID: repetition.RepetitionID,
      },
    }).FK_Tasks(args);
  }
}
