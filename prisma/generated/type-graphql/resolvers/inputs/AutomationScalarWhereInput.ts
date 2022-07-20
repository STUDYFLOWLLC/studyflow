import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AutomationScalarWhereInput", {
  isAbstract: true
})
export class AutomationScalarWhereInput {
  @TypeGraphQL.Field(_type => [AutomationScalarWhereInput], {
    nullable: true
  })
  AND?: AutomationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarWhereInput], {
    nullable: true
  })
  OR?: AutomationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarWhereInput], {
    nullable: true
  })
  NOT?: AutomationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  AutomationID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  RefreshToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_UserID?: IntFilter | undefined;
}
