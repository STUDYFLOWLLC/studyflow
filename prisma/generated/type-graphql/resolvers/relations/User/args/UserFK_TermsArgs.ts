import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermOrderByWithRelationInput } from "../../../inputs/TermOrderByWithRelationInput";
import { TermWhereInput } from "../../../inputs/TermWhereInput";
import { TermWhereUniqueInput } from "../../../inputs/TermWhereUniqueInput";
import { TermScalarFieldEnum } from "../../../../enums/TermScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserFK_TermsArgs {
  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  where?: TermWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TermOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TermOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: true
  })
  cursor?: TermWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TermScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"TermID" | "CreatedTime" | "TermType" | "TermName" | "TermStartDate" | "TermEndDate" | "FK_UserID"> | undefined;
}
