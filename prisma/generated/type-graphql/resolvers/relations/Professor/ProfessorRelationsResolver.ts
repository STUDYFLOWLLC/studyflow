import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { Professor } from "../../../models/Professor";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Professor)
export class ProfessorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: true
  })
  async FK_Course(@TypeGraphQL.Root() professor: Professor, @TypeGraphQL.Ctx() ctx: any): Promise<Course | null> {
    return getPrismaFromContext(ctx).professor.findUnique({
      where: {
        ProfessorID: professor.ProfessorID,
      },
    }).FK_Course({});
  }
}
