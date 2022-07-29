import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFK_UserFromInput } from "../inputs/FriendshipCreateManyFK_UserFromInput";

@TypeGraphQL.InputType("FriendshipCreateManyFK_UserFromInputEnvelope", {
  isAbstract: true
})
export class FriendshipCreateManyFK_UserFromInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyFK_UserFromInput], {
    nullable: false
  })
  data!: FriendshipCreateManyFK_UserFromInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
