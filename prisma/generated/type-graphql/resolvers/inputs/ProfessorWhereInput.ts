import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

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

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  FK_Course?: CourseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;
}
