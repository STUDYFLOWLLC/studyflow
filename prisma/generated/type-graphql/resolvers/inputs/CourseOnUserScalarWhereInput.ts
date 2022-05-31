import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CourseOnUserScalarWhereInput", {
  isAbstract: true
})
export class CourseOnUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereInput], {
    nullable: true
  })
  AND?: CourseOnUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereInput], {
    nullable: true
  })
  OR?: CourseOnUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereInput], {
    nullable: true
  })
  NOT?: CourseOnUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseOnUserID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  HOLDER?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableFilter | undefined;
}
