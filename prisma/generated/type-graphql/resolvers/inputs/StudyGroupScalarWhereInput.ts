import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StudyGroupScalarWhereInput", {
  isAbstract: true
})
export class StudyGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereInput], {
    nullable: true
  })
  AND?: StudyGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereInput], {
    nullable: true
  })
  OR?: StudyGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: StudyGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  StudyGroupID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_UserID?: IntFilter | undefined;
}
