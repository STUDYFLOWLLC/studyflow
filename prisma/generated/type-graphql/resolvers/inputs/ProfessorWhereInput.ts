import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ProfessorsOnCoursesListRelationFilter } from "../inputs/ProfessorsOnCoursesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ProfessorWhereInput", {
  isAbstract: true
})
export class ProfessorWhereInput {
  @TypeGraphQL.Field(_type => [ProfessorWhereInput], {
    nullable: true
  })
  AND?: ProfessorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereInput], {
    nullable: true
  })
  OR?: ProfessorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereInput], {
    nullable: true
  })
  NOT?: ProfessorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ProfessorID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesListRelationFilter, {
    nullable: true
  })
  FK_Courses?: ProfessorsOnCoursesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Email?: StringNullableFilter | undefined;
}
