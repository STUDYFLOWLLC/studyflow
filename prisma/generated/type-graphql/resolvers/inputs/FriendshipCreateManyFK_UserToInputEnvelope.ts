import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFK_UserToInput } from "../inputs/FriendshipCreateManyFK_UserToInput";

@TypeGraphQL.InputType("FriendshipCreateManyFK_UserToInputEnvelope", {
  isAbstract: true
})
export class FriendshipCreateManyFK_UserToInputEnvelope {
  @TypeGraphQL.Field(_type => [FriendshipCreateManyFK_UserToInput], {
    nullable: false
  })
  data!: FriendshipCreateManyFK_UserToInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
