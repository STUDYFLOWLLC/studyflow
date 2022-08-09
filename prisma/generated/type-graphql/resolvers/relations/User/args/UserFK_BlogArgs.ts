import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogOrderByWithRelationInput } from "../../../inputs/BlogOrderByWithRelationInput";
import { BlogWhereInput } from "../../../inputs/BlogWhereInput";
import { BlogWhereUniqueInput } from "../../../inputs/BlogWhereUniqueInput";
import { BlogScalarFieldEnum } from "../../../../enums/BlogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserFK_BlogArgs {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlogOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BlogOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: true
  })
  cursor?: BlogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"BlogID" | "CreatedTime" | "DeletedTime" | "FK_UserID" | "Title" | "Body"> | undefined;
}
