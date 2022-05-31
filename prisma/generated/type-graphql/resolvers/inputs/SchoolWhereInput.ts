import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseListRelationFilter } from "../inputs/CourseListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SchoolWhereInput", {
  isAbstract: true
})
export class SchoolWhereInput {
  @TypeGraphQL.Field(_type => [SchoolWhereInput], {
    nullable: true
  })
  AND?: SchoolWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolWhereInput], {
    nullable: true
  })
  OR?: SchoolWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolWhereInput], {
    nullable: true
  })
  NOT?: SchoolWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  SchoolID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CourseListRelationFilter, {
    nullable: true
  })
  FK_Course?: CourseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  HasClassSupport?: BoolFilter | undefined;
}