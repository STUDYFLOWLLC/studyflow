import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { CourseOnTerm } from "../../../models/CourseOnTerm";
import { Flow } from "../../../models/Flow";
import { Term } from "../../../models/Term";
import { CourseOnTermFK_FlowsArgs } from "./args/CourseOnTermFK_FlowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CourseOnTerm)
export class CourseOnTermRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: false
  })
  async FK_Course(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any): Promise<Course> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Course({});
  }

  @TypeGraphQL.FieldResolver(_type => Term, {
    nullable: false
  })
  async FK_Term(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any): Promise<Term> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Term({});
  }

  @TypeGraphQL.FieldResolver(_type => [Flow], {
    nullable: false
  })
  async FK_Flows(@TypeGraphQL.Root() courseOnTerm: CourseOnTerm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseOnTermFK_FlowsArgs): Promise<Flow[]> {
    return getPrismaFromContext(ctx).courseOnTerm.findUnique({
      where: {
        CourseOnTermID: courseOnTerm.CourseOnTermID,
      },
    }).FK_Flows(args);
  }
}
